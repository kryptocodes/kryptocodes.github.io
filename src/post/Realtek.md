---
title: "Install Realtek WiFi driver for GNU/Linux"
date: 2019-07-28
slug: "four"
draft: false
---
## Table of Contents
* Getting Internet
* Finding Device
* Prerequisite

![](http://www.quickmeme.com/img/1c/1c5e24d60fd606d270d22d125ae256b38c8d59c4b9aa45cb428ae3079e0ed024.jpg)

I've been doing a lot of Linux installations lately and one very annoying thing that I found in 2 laptops was the non availability of WiFi driver. Apparently, it's a new hardware and is not in the Linux kernel.

The hardware is `Realtek device d723`. This new WiFi hardware is being shipped in new PCs and laptops now. Without having the internet, one can't do almost anything. So it's important to have this fixed up.

# Getting Internet

We need a temporary internet connection to fix WiFi. Ways to connect :

* Connect USB cable and use USB Tethering in your phone to connect your computer to the internet (through phone's cellular data/WiFi)
* Use wired ethernet cable for connecting to internet

# Finding device

Open a terminal and do the command ` lspci`. you will see all the PCI devices of your system.

# Prerequisite

You should install the corresponding header of your kernel:
```bash
sudo apt-get install linux-headers-"username" -r
```

Next,install the packages necessary for building:
```bash
sudo apt-get install git build-essential dkms
```
# Fix

We're gonna use the driver available in this Github repository' [extended branch](https://github.com/lwfinger/rtlwifi_new/tree/extended)

```bash
git clone -b extended --single-branch https://github.com/lwfinger/rtlwifi_new.git
sudo dkms add rtlwifi_new
sudo dkms install rtlwifi-new/0.6
```

***Restart*** your comuter voila you'll get your WiFi !
