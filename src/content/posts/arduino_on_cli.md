---
language: "en"
layout: "../../layouts/post.astro"
title: "Arduino in CLI"
image:
  src: "https://blog.arduino.cc/wp-content/uploads/2020/03/blogpost_arduino-cli-1024x549.png"
  alt: "Arduino CLI logo"
description: "How to use Arduino in the command line interface"
tags: ["Arduino", "CLI", "Programming"]
date: 2024-04-15
---

# Introduction

If you are a fan of the command line interface (CLI) and you want to use Arduino in the CLI, this guide is for you.

In this guide, we will show you how to set up Arduino CLI and use it to compile and upload sketches to your Arduino board.

## For the beggining we need to install Arduino CLI and NeoVim

### To install Arduino CLI

```bash
# If you are on macOS
brew install arduino-cli

# If you are on Linux
sudo apt install arduino-cli
```

### To install NeoVim

```bash
# If you are on macOS
brew install neovim

# If you are on Linux
sudo apt install neovim
```

## Getting started

Constraints:

- Project name: `I2C`
- Board: `arduino:avr:mega`
- Port: `/dev/cu.usbmodem11401`

### 1. Initialize the project

```bash
arduino-cli sketch new I2C
cd I2C
```

### 2. Determine the board FQBN (Fully Qualified Board Name)

```bash
arduino-cli board list
```

![Board list](https://i.imgur.com/9nMI4LDl.png)

### 3. Install the board core

```bash
arduino-cli core install arduino:avr:mega
```

# WIP
