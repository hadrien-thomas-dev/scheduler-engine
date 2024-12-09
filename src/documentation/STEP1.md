# Step 1: General setup

- create repository in github https://github.com/hadrien-thomas-dev/scheduler-engine

- clone repository `git clone git@github.com:hadrien-thomas-dev/scheduler-engine.git`

- create lib with vite from the parent directory `npm create vite@latest scheduler-engine` (it will create a new directory named `scheduler-engine` if it doesn't exist)
```bash
> npx
> create-vite scheduler-engine

√ Target directory "scheduler-engine" is not empty. Please choose how to proceed: » Ignore files and continue
√ Select a framework: » Vanilla
√ Select a variant: » TypeScript
```

- edited package.json to set version to 0.0.1
```json
{
  "name": "scheduler-engine",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "typescript": "~5.6.2",
    "vite": "^6.0.1"
  }
}
```

- `cd scheduler-engine`

- install dependencies `npm install`
```bash
added 11 packages, and audited 12 packages in 10s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

- `npm run dev`
```bash
  VITE v6.0.3  ready in 126 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
