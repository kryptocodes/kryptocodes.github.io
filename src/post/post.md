---
title: "Rename a local and remote branch in git"
date: 2019-07-14T14:19:35+05:30
draft: false
---

if you have named a branch incorrectly and pushed to the remote repository or more precisely if you think you have messed up then follow this steps


![](http://weknowmemes.com/generator/uploads/generated/g1384940748876722625.jpg)

# 1.) Rename your local branch
If you are on the branch you want to rename:
```
git branch -m new-name
```
if you are on different branch
```
git branch -m old-name new-name
```

# 2.) Delete the old-name remote branch and push the new-name local branch
```
git push origin :old-name new-name
```

# 3.) Reset the upstream branch for the new-name local branch
switch to the branch and then
```
git push origin -u new-name
```
![](https://raw.githubusercontent.com/lyndseypadget/semflow/master/images/mansplaining.jpg)

and that's it
