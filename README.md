## Introduction 

[![npm version](https://badge.fury.io/js/ini-stage.svg)](https://badge.fury.io/js/ini-stage)

An initialization scaffolding tool for front-end developer. I'm use it to initialize my project scaffolding, and no need to create the project folder struct every time, just use the commonder line in `ini -s`.

[中文文档](./README_CN.md)

## Install with npm

`npm install -g ini-stage`

## Usage

Usage: `ini [options]`

Options:

```
  -h, --help     output usage information
  -V, --version  output the version number
  -s [git], --start [git]   Start initialize. The git is optional, refers to automatic initialization git
```

If you want to create a custom directory structure，as long as in the root path of project to create a `config.json` file, in which contains a directory structure configuration, and the type of config.json must be an Array type. Also, ini-stage provides a default `config.json` that is a common front-end development project directory structure，its body is as follows.

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
    "template",
    "backup",
    "#README.md"
]

```

- prefix `#`  refers to a file, otherwise is a folder.
- the object refer to contains sub directory.

## License

MIT.
