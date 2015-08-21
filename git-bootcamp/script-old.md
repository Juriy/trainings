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


5. Setting up initial repository
--------------------------------

```
$ git init --bare bootcamp.git
```
By convention, bare repositories are folders that end with .git, that way
other developers know that this is a bare repository.

Now, set up the folders for our users: Bender and Fry

```
$ mkdir bend
$ mkdir fry
```

Fry starts the development by adding a simple main file:

```
$ git clone /Users/juriy/dev/git-repos/bootcamp.git
$ git config user.name "Fry"
$ git config user.email "fry@futurama.com"
$ vim main.js
```

He can check that the program is running and once he is happy with 
the result, he can commit the changes:

```
git add main.js
git commit -m 'Added initial main'
git push -u origin master
```

6. Index vs Working Directory
-----------------------------

Bender is ready to join the work. He also clones the repository, 
and now he gets the file that Fry just pushed.

Bender starts to add some important features

```
$ vim main.js

# add some code there

$ git add main.js

```

(show difference between working directory and staging area)

```
# forgot to add the data there, edit files once again

$ git status

# describe that the staging area has changed, it contains the
# old version of the file

$ git add main.js

# add again to commit the latest change

$ git commit "added main file"



7. Ignoring files
-----------------

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


8. Log
------

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


9. Aliases
----------


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
$ git diff HEAD
```

It looks like it is easier to undo the changes and start all over again.

```
$ git checkout <filename>
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
$ git push -u origin experiment

# Or, to specify the different name, there's a more verbose syntax
$ git push -u origin bending-feature:bending
```


Getting branches from the remote
--------------------------------
--------------------------------
The local branch will not be automatically created. What needs to be done in
order to make a local version of a remote branch is this:

```
# list both local and remote branches
$ git branch -a

# create the local version
$ git checkout -b experiment origin/experiment

# alternatively, this will also work
$ git checkout experiment
```

Deleting branches
-----------------
-----------------
Once the work is done and merged, it is time to delete the branch.

```
# to delete a local branch
$ git branch -d bending-feature

# to delete a remote branch
$ git push origin --delete bending

# others will have to run the following to remove the branch:
$ git fetch origin --prune
```

Undoing a delete
----------------
----------------

```
# return to the state of the branch
$ git checkout -b <branch> <sha>

# set it to track the remote
$ git branch -u upstream/foo
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

```
# Fry
export PS1='\[\e[1;34m\][\W]\[\e[0m\]\$ '

# Bender
export PS1='\[\e[1;31m\][\W]\[\e[0m\]\$ '
```


Links:
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


git log --graph --pretty=format:'%C(magenta)%h%Creset -%C(red)%d%Creset %s %C(dim green)(%cr) %C(cyan)<%an>%Creset' --abbrev-commit

git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"


Pretty format colors:
http://stackoverflow.com/questions/15458237/git-pretty-format-colors