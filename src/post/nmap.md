---
title: "Penetration Testing with Nmap: A Beginner's Guide"
date: "2020-03-17"
slug: "nmap"
draft: true
---

> **Note**:Attacking other's computer is illegal.This content is for educational purpose only.Perform attacks only on the machine or networks which you own or permission.


Alright, before jumping into Nmap let me brief about the pen test or penetration test. Nmap is a one of the  information gathering tools

# So WTF is Pentest

![pentest](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXHjSGmtyVeupMfWorZDWX9Tr1Pv6f1YzQqqaFzDvRHyx06Ux7)


A penetration test, colloquially known as a pen test,Penetration testing is a process used by companies to test the security of their software and infrastructure. In penetration testing, a group of security professionals act as attackers in order to identify holes before hackers do. A pen tester’s goal is to provide information to the company about their vulnerabilities. In the world of security this is commonly referred to as red teaming. On the other side of penetration testing the company’s security team, the blue team, figure out what areas of their security need to be strengthened.

![pentest1](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOC57xpon4LyoRvSZpT6bkWU7jaEVsAuNk-sqWptOC78-4TezH)

*LoL*

# So is a penetration tester just a hacker??

![hackercat](https://content.spiceworksstatic.com/service.community/p/post_images/0000287256/5a3cda82/attached_image/a5e7b392129104c982149a73f7d33480.jpg)

A major difference between a malicious hacker and pen tester is permission and reporting. Most companies provide a scope of areas where they would like the pen tester to focus. These could be specific domains, networks, systems etc. Pen testers also record any vulnerabilities found during their testing and can suggest solutions to patch the issue

# Pentest methodology

`Scanning and Reconnaissance` — Getting to know the target using passive methods like researching publicly available information and network scanning.

Unlike the movies hackers don’t just start typing and automatically get access to a system. Scanning and reconnaissance is a key part of an attack in that it can detail vulnerable areas of a system. The first step of information gathering can be as simple as a quick google search.

One way to think about information gathering is like breaking into a house. There’s no need to break down the door to get inside when there is a window open. In information gathering we want to find if the company we are testing has left any doors unlocked or maybe a window open.

`Threat Modeling` — A description or model of all the security concerns and why they should be resolved.

`Vulnerability Analysis` — Identifying vulnerabilities and determining their severity.

`Exploitation` — Gaining access by breaching security of a system or finding a bug to exploit in the software.

`Post-Exploitation Reporting` — Detailing the vulnerabilities found and providing information on potential impact on the company if exploited.

# Nmap

Nmap is a free open source tool for running scans on networks and discovering potential vulnerbilities.Using nmap network architectures and open ports are easier to locate.If you're a pentester,Nmap is a crucial part of your reconnaissance for understanding the landscape of what you're working with.

For reasons unknown, Hollywood has decided that Nmap is the tool to show whenever hacking scenes are needed. At least it is a lot more realistic than silly 3D animation approach used in many previous movies (e.g. "hacking the Gibson" on Hackers, or the much worse portrayals on Swordfish). We always like to see Nmap in the movies.While Nmap had been used in some previous obscure movies, it was The Matrix Reloaded which really turned Nmap into a movie star!
![matrix](/images/matrix.gif)

Clip from Matrix reloaded where Carrie-Anne Moss uses nmap to port scan the matrix and performs an attack against a SSH Unix server to get root access (SSH1 CRC32 COMPENSATION ATTACK)

# Installing Nmap

Nmap is pretty easy to install on Windows and MacOS - check out the official [download page](https://nmap.org/download.html). I recommend using Zenmap, the GUI that comes with the Windows and MacOS download. If you're on linux you can simply run `sudo apt-get install nmap`

# Scanning for Ports With Nmap

Nmap is a powerfully versatile tool with many options. So many that the people behind Nmap managed to write a 468-page long book on it.

I’ll go over the basic usage of Nmap first, and then we can get into some of the fancier options. I’ll use Yahoo.com at my target host since they’ve got an active bug bounty program and I won't end up in a jail.

Here’s a basic scan:

```
nmap -sS yahoo.com
```

![nmap1](/images/nmap1.png)

The -sS flag performs a SYN scan, scanning many ports without ever completing a TCP connection. This is a great option if you don’t want to be too noisy. This shows us there are two open ports, 80 and 443 (for HTTP and HTTPS). Pretty much what we’d expect!

Let’s add another flag to this, -O.


```
nmap -sS -O yahoo.com
```

![nmap2](/images/nmap2.png)

This time, we see the ports and also some guesses of what OS the server might be running. Knowing what OS is running on a server is an important part of reconnaissance since some vulnerabilities are OS-specific. For example, OpenSSH 5.3 is ancient and has exploits publicly available, and if you see it on a server, chances are it’s vulnerable. The most notable exception to this is if the server runs Redhat OS, since Redhat has patched around OpenSSH 5.3’s issues.

Side note: the -O flag is slow, so drop it from your scan if you don’t need it.

Let’s check out another flag, -sV

```
nmap -sS -O -sV yahoo.com
```

![nmap3](/images/nmap3.png)

This time, we see the version of what software is running on the ports! This is crucial for discovering vulnerabilities since older software tends to have more exploits available. Try also throwing in the -v flag, which gives you more verbose information about the output.

Next, let’s try specifying what ports we want to check for instead of just doing a general scan.

```
nmap -sS -sV -v -p 22 yahoo.com
```

![nmap4](/images/nmap4.png)

We can see that port 22 is filtered on Yahoo, which means we’d probably have a hard time attacking it. You can specify a range of ports by replacing -p 22 with something like -p 1-165535. The flag that I usually use is –top-ports 1000, which as the name implies, scans the most common 1000 ports.

Putting it all together, this is what I’ll usually run to get an overall look of the host

```
nmap -sS -sV -O -v --top-ports 1000 yahoo.com
```

![nmap5](/images/nmap5.png)

Here, we’re doing a sneaky scan (sS), version detection (sV), operating system detection (O), verbose output (v), and scanning the top 1000 ports.

Now you know the basics of port scanning with Nmap!

# Going Further

![nmap6](https://www.4armed.com/uploads/2018/12/butwaittheresmore.png)

# Scanning IP Ranges

Scanning IP ranges instead of a single host is useful if you're testing on your own servers. I don't recommend doing this on servers you don't own,since you might miss and scan someone who's not your target

Nmap uses CIDR notation,so you can just run something

```
nmap -sv --top-ports 1000 192.168.1.0/24
```

# Timing

Nmap has five timing options, officially named: 
```
paranoid,sneaky,polite,normal,agressive,insane
```
you can specify this with the T flag eg -T0 for paranoid and -T5 for insane. By the way the default Nmap runs on "normal" mode, so -T3 does nothing,

# File Output

If you want to save Nmap's results to a file for later, add the -oN filename flag -oX filename outputs results in XML format, which is useful if you've got scripts that process Nmap output

# Scripts

Nmap comes with some scripts you can enable but ah I prefer other tool than scripts but you can google about those guide

## The Fun Part: Exploitation

![exploitation](https://memecrunch.com/meme/TCL3/exploitation/image.jpg)

Now that we know what's running on a host,we want to exploit it

Attacking network is an entire topic of it's own but i'll cover some of the basic here

# Port 22: SSH

if the network has port 22 open and ssh running on it, that's a good starting point.If you can successfully 
manage to log in through SSH,well... that's a bad sign for the server

First off,check the version of SSH that's running (well you can do with -sV flag).Google that version and chuck in the keyword "exploit".If it's an older version of SSH, you have good chances of finding publicly available exploits that you can just copy and run.

If that doesn't work, you still have a chance of getting a login. Go back to your terminal and run something like this:

`ssh remote_username@remote_host`

“remote_username” can be any number of things, but the common names I’d check for are admin and root.
Try some common passwords, and also try some company-specific things (does the network admin have a dog? kids? try their names). You can also try to run a bruteforce scan, but that’s out of the scope of this post.

# Everything Else

SSH is a special case because of the severity of compromise possible if you get a login, but other services can be equally vulnerable.

Once you’ve run an Nmap scan with version detection enabled, see if anything other than just port 80 and 443 shows up. Google the name of any services you find and figure out what they do, and if any exploits are publicly available. You know how developers joke about ripping all their work off StackOverflow? Pentesters pretty much do the same but with CVE (Common Vulnerabilities and Exposures) databases.

Once you’ve run out of services to Google public exploits for, you can double back and check if any of the services have login portals. For example, if the service is webmail, you can try logging in to it with netcat by trying out default usernames and passwords for that service.

And that's for this blog, hope I'll write more about pen-test in upcoming days and if you've performed above commands well you're a hacker now LoL

![hackerman](https://i.imgflip.com/2cjjnb.jpg)

P.S: Hacking is a skill to learn. You will not become a good pentester by just doing a few online courses. You will not become a good pentester by just installing Kali Linux. This is a challenging path, wrought with endless frustrations, and you will not learn how to travel it well within a day - a month - or even a year. However, if you’re determined, you’ll find pentesting to be an incredibly rewarding field and you might never want to leave.

HAPPY HACKING :-P