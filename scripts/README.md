# Development scripts

These are scripts used during development and deployment.

Note that they assume to be called from the main directory of the project (where `package.json` is located), like that:

```sh
/path/to/the/project $ ./scripts/my-script.sh
```

If you integrate them with external tools (like Forever, Systemd, Cron or Supervisord), make sure the working directory is set correctly.

During development most of the script should be called via NPM (in fact they implicitly relay on it). For example:

```sh
npm run develop
```

instead of ~~`./scripts/develop.sh`~~.

Also note that they use some features of Bash. Running them using `/bin/sh` will result in erratic behavior. The good news is that you don't have to specify shell. Just run the scripts directly.

Scripts should have self-explanatory names. Please look for comments in each of them for more information.
