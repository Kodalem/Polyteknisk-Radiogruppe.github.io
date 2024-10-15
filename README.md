# Christine's Notes!

## Pre-requisites

***You must get the .json key file from the Google Cloud Platform to be able to run the project.***

Follow the instructions in the [Litestream Documentation](https://litestream.io/guides/gcs/). The key file should be in the own
created `./private/this_must_be_moved` folder. And make sure that Dockerfile has the correct path to the key file, i.e. 
`./private/this_must_be_moved/your_key_file.json`.

## Building

```zsh
docker build -t tiny-stack-2 .
```

## Running 

```zsh
docker run \
  -p 4321:4321 \
  -v $(pwd)/data:/data \
  tiny-stack-2
```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Astro?

Feel free to check [their documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
