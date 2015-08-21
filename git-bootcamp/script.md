- Introduction to version control
	- Why you need a version control
	- Evolution of vcs systems
		- Local VCS
		- Centralized VCS
		- Distributed VCS
	- Alternatives to git: Bazar and Mercurial

- Installing Git
	- Getting the downloadables
	- How git works under windows
		- msysgit
		- git for windows


1. Introduction to version controls
-----------------------------------

1. MsysGit is a development environment that is used to compile git on windows. 
	msys - collection of command line utilities to complement MinGW
	MinGW - collection of development tools under windows (GCC compiler)

Meaning that you can not only get the git as binary but also create it from sources. The git for windows in contrast is only an executable with no extra tools.

The names now will change to "Git for Windows" and "Git for Windows SDK".


2. What is GitHub
-----------------
(explain about the service)


3. GUI Clients
--------------
There are several GUI clients, some specifilally for GitHub

https://windows.github.com/
https://mac.github.com/


4. Installing Git
-----------------

1. Windows 

2. MacOS
	- Download the package from http://git-scm.com/download/mac
	- Run the installer

3. If there was older git present, just append the right path to git.
	The installer will install to /usr/local/git/



5. Configuring intial git 

```
$ git clone ../../git-repos/git-bootcamp.git
$ git config user.name "Bender"
$ git config user.email "bender@futurama.com"
```

```
$ vim main.js

# add some code there

$ git add main.js

# forgot to add the data there, edit files once again

$ git status

# describe that the staging area has changed, it contains the
# old version of the file

$ git add main.js

# add again to commit the latest change

$ git commit "added main file"

# Editor shows up to change commit message
# add some text and save

$ mkdir node_modules

# explain that empty folders cannot be added to git

$ npm install colors

# we don't need node_modules in repository
# .gitignore to the rescue

$ vim .gitignore

# Add entries:
node_modules
.DS_Store

$ git status

# node_modules dissapear, but .gitignore is there

$ git commit -m "Added gitignore"

# explain the shorthand of the commit messaging

# Let's look at the list of commit that we've got so far

$ git log

# will show huge output

$ git log --pretty=oneline

# much better but still very verbose

$ git log --pretty=oneline --abbrev-commit
# the output that we're looking for


# Usually you're not interested in a whole history of a 
# project, so it makes sense to limit the output to a given number
# of commits:

$ git log --pretty=oneline --abbrev-commit -n 2

# Now, we're quite happy with the project setup it is time
# to share it with the other team members

$ git push


# Fry can now perform pull to get Bender's work

$ git pull

# They both start the development and modify main.js
# Fry commits and pushes his code first

$ git push

# Bender has also finished his part, but if he tries to
# push, he will get an error message, saying that somebody has
# updated the upstream before him
```

First conflict
--------------
--------------
```
$ git push

# In order to push Bender must resolve the conflicts and commit 
# the changes. First, let's see the current status

$ git status

# Now, there's a file that is in conflict let's fix it and 
# mark as resolved

$ git add main.js

# Since there is no more commits left, we are ready to
# commit and push the changes

$ git commit -m "Merging with Fry's changes"

$ git push
```

Undoing things 
--------------
--------------
The best thing about version control is that there's (almost) nothing
that can't be undone. Here's a story how Bender and Fry are fixing 
their mistakes.

```
# Bender accidentally adds the file that he was not going to add to .git

$ echo "BenDiTBaBy" >> bender-passwords.txt
$ git add bender-passwords.txt

# Now he realizes that he did something wrong, and he wants
# to unstage the file without actually removing it from the working area

$ git reset HEAD bender-passwords.txt
```

At the same time Fry has created another file and modified his
main.js. He commits the code, and just after he preses enter
he realizes that one file has been forgotten. Since the
commit has not been published yet, Fry can easily fix that

```
$ git add main.js
$ git commit --amend 
```

Bender is working hard on his part of the job, but he suddenly 
realizes that he had broken the file so heavily, that he doesn't even
remember how original file used to work. 

The first thing he does is he looks at the changes that he has 
implemented:

```
$ git diff ????
```

Creating & Switching Branches
-----------------
-----------------
Fry starts to work on the experimental feature that involves big changes
in the code. Since he doesn't want to affect the main stream of development
he creates a branch called 'experiment'.

$ git branch experiment
$ git checkout experiment

Fry could also use the shortcut command for that:

```
$ git checkout -b experiment
```

Now Fry is on experiment branch and the code that he commits will not
break the main stream of development. Just to make sure that he is on the
right branch Fry will run the following command:

```
$ git branch
```

Fry makes couple of modifications and commits.

In the middle of the day, it turns out that there is an urgent change that 
should be implemented on the main project, and Fry needs to do that.

Fry switches to the main branch and implements a fix:

```
# switch to master branch
$ git checkout master

# modify the code

$ git add main.js
$ git commit -m "Fixed urgent issue"
$ git push origin master
$ git checkout experiment
# continue to work on experiment
```

Notice, that the branch has not been automatically shared with other
developers in a team. So if Bender pulls the code, he won't see it. 

```
# From Bender's console
$ git pull
```

To list all the branches, bender runs:

```
$ git branch -a
```

This command will show all the branches, not only local. And as you see
there is no 'experiment' branch in the list.

> NOTICE: The good thing about having Fry's branch private is that he
> can be sure that no other developers will see it or commit any code there. 
> Fry is free to do anything with his branch, for example, he could rewrite the
> history of the commits. As we'll see later, if the branch is public, you have 
> to treat it with little more care. 

The downside of this setup is that Fry's branch is not pushed on the server. 
It means that if his computer is destroyed by a blaster he will lose the results
of his experiments. This problem can be solved as we'll see later by organizing
a separate private repository for Fry.


Publishing branches
-------------------
-------------------
Notice, we are still on Fry's private branch. If Bender tries to see the code

```
$ git push
```

Before pushing the changes to the branch, the branch itself must be pushed. 
Fry decides to ask Bender for help with the experiment, so he publishes
the branch

```
$ git push origin experiment
```

Deleting and Moving files
-------------------------
-------------------------

During his experiment Fry commits a file:

```
$ touch experiment.js
$ git add experiment.js 
$ git commit -m "Added an experimental file"
```

After some thinking (and maybe a few commits later) he realizes that 
the better place for the file would be in `lib` folder. So he moves the file:

```
$ mkdir lib
$ mv experiment.js lib/horoscope.js
```

At first git will treat it like the file was deleted and a new file is 
created:

```
$ git status
```

However once you add both files to staging area, git will recognize that
the file has been simply moved. Notice that you still have to add a deleted
file with `git add` or `git delete` command to commit that change:

```
$ git add lib
$ git add experiment.js 
```

Now we can commit the change:

```
$ git commit -m "Renamed and moved horoscope functions"
```

Making Tags
-----------
-----------
The first version of a code looks good. Fry and Bender decide that they
are ready to release the first version of the product. Fry adds a last
commit, bumping up a version number in the library and readme file.

```
# change version number in js and in README
$ git commit -am "Updated the version number"
```

To have a reference to the exact code that was released we usually use `tags`. 
Git supports tags in two flavors: _lighweight tag_ and _annotated tag_.
A lightweight tag is nothing but a label for a particular commit, while 
annotated tag is a full copy of a state of a system at that point in time.

Generally it is recommended to use annotated tags for releases and everything
else that is supposed to be permanent, while lightweight tags are used
only for temporary labels.

Bender pulls the code to make sure he's not missing anything and adds an
annotated tag:

```
$ git tag -a v.0.0.1
```

 decide to release it and mark this state with a tag 'v.0.0.1'



Misc notes
----------

Push -u will make every successfully pushed branch automatically tracked (otherwise, git pull will not know where to pull from and display an error info). To set tracking information later use:

git branch --set-upstream-to=origin/master master


Misc:
Setting terminal colors to mark different developers
# Fry
PS1='\[\e[1;34m\][\W]\[\e[0m\]\$ '

# Bender
PS1='\[\e[1;31m\][\W]\[\e[0m\]\$ '


Branchhing
----------
----------

Todo: move to appropriate place

1. Publishing branches

```
# publish
$ git checkout -b experiment
$ git push -u origin experiment

# get the branch and set tracking
$ git fetch 
$ git checkout -b experiment origin/experiment

# delete local branch

$ git branch -d experiment
$ git branch --delete <branch>
$ git branch -d <branch> # Shorter version
$ git branch -D <branch> # Force delete un-merged branches

# delete on the server
$ git push origin --delete experiment

# others will have to prune 
$ git fetch origin -p

# restore the branch
$ git checkout -b experiment 5aa025b
$ git branch --set-upstream-to=origin/experiment experiment

```

2. Remote tracking branches, tracking branches, and just branches

3. Rebasing

```
$ git checkout experiment
$ git rebase master
$ git checkout master
$ git merge experiment
```

4. Cherry Picking
```
$ git cherry-pick <sha>
```

4. Rebase vs Merge, when to use what

5. Git Workflows
	5.1. Centralized
	5.2. Feature Branches
	5.3. Github
	5.4. Gitflow


Referring revisions
-------------------
-------------------
Referring revision is good to show on the example of `git show` for single commits
or git log for multiple commits, since these commands list clearly which commits
were selected

```
$ git show <sha>
```



Revision selection 
------------------
------------------

```
# sha
$ git show 1c002d

# Branch spec
$ git show dev

# Branch reference
```


Using tilde and caret
---------------------
---------------------

Notice that on Windows caret is a special character, so quoting a commit reference might help

```
# this will not work
> git show master^0

# but this will
> git show "master^0"
```


```
G   H   I   J
 \ /     \ /
  D   E   F
   \  |  / \
    \ | /   |
     \|/    |
      B     C
       \   /
        \ /
         A
A =      = A^0
B = A^   = A^1     = A~1
C = A^2  = A^2
D = A^^  = A^1^1   = A~2
E = B^2  = A^^2
F = B^3  = A^^3
G = A^^^ = A^1^1^1 = A~3
H = D^2  = B^^2    = A^^^2  = A~2^2
I = F^   = B^3^    = A^^3^
J = F^2  = B^3^2   = A^^3^2
```


Resetting:
-------------
-------------
1. Soft, will save the changes in the 



Tags
----
----
There are two kind of tags in git - lightweight tags and annotated tags. 
Lightweight tag is only a 'shared pointer' that is available for everybody. 
Annotated tag also has a message, an author and a date. Annotated tag is actually an
object in git database.

Here's a great explanation on why to use annotated tags vs lightweight:
http://stackoverflow.com/questions/4971746/why-should-i-care-about-lightweight-vs-annotated-tags/4971817#4971817

```
# creating an annotated tag
$ git tag -a v1.4 -m 'my version 1.4'

# listing tags
$ git tag

# filtering the tags by their names
$ git tag -l 'v.1*'

# create a lightweight tag
$ git tag v1.4

# show the details of the tag
$ git show v1.4

# Also it is possible to tag later
git tag -a v1.2 9fceb02
```​

Extra
-----------
-----------

How to change origin/master from default to something else:
-----------------------------------------------------------

```
$ git init --bare camp.git
$ cd camp.git

# Now clone this remote, giving non-default name

$ git clone /path/to/camp.git -o local

# Notice that HEAD by default points to the 'master'
# that in fact does not exist
$ git checkout -b dev
$ touch main.txt
$ git add main.txt
$ git commit -m "Initial commit"
$ git push local dev

# Remote's head is still pointin to the master, get rid of it
$ cd /path/to/camp.git
$ git symbolic-ref HEAD refs/heads/dev

# The next to clone from this origin will checkout branch 'dev'
```
Notice, `origin/HEAD` is not particularly useful, it just gives you the information
about what is the default branch on that remote.

Alias with parameters
---------------------
With simple alias this is not possible. Git supports alias that call shell: an alias starting with ! will execute the line in the shell instead.

[alias]
    files = "!f() { git diff --name-status $1^ $1; }; f"



Links
-----
-----
http://www.mingw.org/
http://stackoverflow.com/questions/3672272/msysgit-vs-git-for-windows
http://stackoverflow.com/questions/3144082/difference-between-msysgit-and-cygwin-git/3144417#3144417

Why two separate URLs for push and pull
https://technosorcery.net/blog/2011/12/26/how-i-use-different-fetch-and-push-urls-in-git/

http://sweetme.at/2013/09/13/git-logs-with-color/

http://www.gitguys.com/ - git tutorials and explanations

Merging without commit
http://stackoverflow.com/questions/8640887/git-merge-without-auto-commit

Git for Computer Scientists
http://eagain.net/articles/git-for-computer-scientists/

Read later - visual guide to git
http://marklodato.github.io/visual-git-guide/index-en.html

@ is the synonym for HEAD
http://stackoverflow.com/questions/964876/head-and-orig-head-in-git/967611#967611

List of merge systems
http://www.git-tower.com/blog/diff-tools-mac/