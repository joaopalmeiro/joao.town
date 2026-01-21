# joao.town

My personal website.

## Development

Install [fnm](https://github.com/Schniz/fnm) and [Rancher Desktop](https://docs.rancherdesktop.io/) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run dev
```

```bash
docker run -p 3000:3000 --rm --init -it --workdir /home/pwuser --user pwuser mcr.microsoft.com/playwright:v1.57.0-noble /bin/sh -c "npx -y playwright@1.57.0 run-server --port 3000 --host 0.0.0.0"
```

```bash
npm run test
```

## Deployment

```bash
npm run build
```
