## Introduction 

An initialization scaffolding tool. I'm use it to initialize my project scaffolding, and no need to create the project folder struct every time, just use the commonder line in `ini -s`.

## Install with npm

`npm install -g ini-stage`

## Usage

Usage: `ini [options]`

Options:

```
  -h, --help     output usage information
  -V, --version  output the version number
  -s, --start    Start initialize
```

If you want to create a custom directory structure，as long as in the root directory of project to create a `config.json` file, in which contains a directory structure configuration . Also, ini-stage provides a default `config.json` that is a common front end development project directory structure，its body is as follows.

```json
[
    "html",
    "css",
    {
        "js":[
            "lib",
            "mod",
            "pkg"
        ]
    },
    "images",
    "psd",
    "doc",
    "test",
    "onlineBackup"
]

```

