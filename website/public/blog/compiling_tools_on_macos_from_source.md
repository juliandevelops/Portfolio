# Compiling Tools on macOS from source

## Background

As a developer you most likely want to use multiple different tools. If you're on macOS, most of them do not provide a native installer. You'll have to use third party tools and library managers. If you do not want to use these, or have more control over where you're tools are installed and which versions you'll use etc., you'll have to compile them from source most of the time. This can be difficult and complicated some of the time.
This gist contains instrutions for multiple different tools.

## Contents

In this gist you'll learn how to configure, compile and install the following languages:

- ruby
- openssl
- libyaml
- python
- rust
- go

## Openssl

### Configure

First you need to configure openssl to install correctly.

```zsh
./configure \
darwin64-arm64 \
--prefix="path/tp/openssl" \
--openssldir="path/to/openssl" \
shared \
no-ssl2 \
no-ssl3 \
no-weak-ssl-ciphers \
enable-ec_nistp_64_gcc_128 \
no-comp \
no-idea \
```

| Flag                       | Description                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| darwin64-arm64             | macos configuration for ARM macs (all modern macs)                                                              |
| --prefix                   | installation directory of openssl                                                                               |
| --openssldir               | installation directory of openssl (since OpenSSL v1.1 both should be set to the same directory)                 |
| shared                     | Used to build shared libraries (for ruby for example)                                                           |
| no-ssl2                    | disables insecure ssl v2 (deprecated)                                                                           |
| no-ssl3                    | disabled insecure ssl v3 (deprecated)                                                                           |
| no-weak-ssl-ciphers        | disables weak ssl ciphers                                                                                       |
| enable-ec_nistp_64_gcc_128 | enables INT128 on little endian systems (arm macs are little endian) for 2x - 4x performance on elliptic curves |
| no-comp                    | disables compression (not required in most cases)                                                               |
| no-idea                    | disables broken IDEA algorithm                                                                                  |

## Python

### Configure

First you'll need to configure the installation

```zsh
./configure \
  --prefix="path/to/python" \
  --enable-optimizations \
  --with-lto=full \
  --with-tail--call-interp
  --with-openssl="path/to/openssl" \
  --enable-shared
```

| Flag                    | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| --prefix                | defines the python directory                                                                      |
| --enable-optimizations  | slows down build process but speeds up the actual python execution through enabling optimizations |
| --with-lto=full         | enables full link time optimizations                                                              |
| --with-tail-call-interp | enables performance enhancements on supported compilers (LLVM 19 and upwards)                     |
| --with-openssl          | uses the defined openssl directory for compilation of python                                      |
| --enable-shared         | builds shared object                                                                              |

## Ruby

Most developers on macOS have to use ruby at some point. At the same time, compiling ruby from source is one of the most difficult processes in this list.

### Prerequisites

- Rust
- a working Ruby (best case)
- libyaml
- openssl

You can see the other topics on how to configure and install those languages

In order to compile and install ruby, you first need to download the source code of the current version. This can be done at the download page of the ruby site (https://www.ruby-lang.org/de/downloads/)

### Configure

First you need to configure the installation. This can be done with the following command on terminal:

```zsh
./configure
  --prefix="path/to/ruby" \
  --with-openssl-dir="path/to/openssl" \
  --with-openssl-lib="path/to/openssl/lib" \
  --with-openssl-include="path/to/openssl/include" \
  --with-yaml-dir="path/to/libyaml" \
  --with-libyaml-dir="path/to/libyaml" \
  --with-libyaml-lib="path/to/libyaml/lib" \
  --with-libyaml-include="path/to/libyaml/include" \
  --enable-shared \
  --enable-yjit \
  --enable-install-static-library
```

#### flags

in this configure command, there are multiple flags passed, which are explained in the following table

| flag                            | description                                                                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prefix`                        | configures the path where to install ruby                                                                                                                              |
| `with-openssl-dir`              | specifies the path to openssl which should be used to compile and install ruby                                                                                         |
| `with-openss-lib`               | specifies the path to the openssl library which is used for steps in the compilation process (sometimes needed, sometimes not) (subdirectory of openssl in most cases) |
| `with-openssl-include`          | specifies the path to the openssl include directory (subdirectory of openssl in most cases)                                                                            |
| `with-yaml-dir`                 | specifies the path to the libyaml directory used to generate Rdoc                                                                                                      |
| `with-libyaml-dir`              | same as _with-yaml_dir_, depends on the version. Both can be specified in order to achieve the result                                                                  |
| `with-libyaml-lib`              | specifies the path to the libyaml library (subdirectory of libyaml in most cases)                                                                                      |
| `with-libyaml-include`          | specified the path to the libyaml include directory (subdirectory of libyaml in most cases)                                                                            |
| `enable-shared`                 |                                                                                                                                                                        |
| `enable-yjit`                   |                                                                                                                                                                        |
| `enable-install-static-library` |                                                                                                                                                                        |

##### other flags

| flag | description |
| ---- | ----------- |

### make

in order to compile the configures ruby source code, you can now run `make` in terminal. If you pass the `-j` flag, you can specify how many processing units (jobs) should be used to compile ruby. If you pass no arguments, the make command will use all available cores.

### make install

now you can run `make install` in order to install the compiled binaries to the, via `--prefix` specified, location on your system.

### notes

you shouldn't move ruby, because it will not work then. In order to move ruby to a different location, you'll have to install ruby again to that location with your current ruby as BASERUBY, and then delete the old ruby
