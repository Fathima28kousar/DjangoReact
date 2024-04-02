"# DjangoReact" 
PS D:\ReactDjango> git commit -m "tst"
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        modified:   djReact/frontend (modified content, untracked content)

no changes added to commit (use "git add" and/or "git commit -a")

------------>So git add djReact/frontend
------------>  git commit -m "tst"

PS D:\ReactDjango\djReact\frontend> git push
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository using

    git remote add <name> <url>

and then push using the remote name

    git push <name>
---------------->So git remote add origin <remote_repository_url>
---------------->git push -u origin main

