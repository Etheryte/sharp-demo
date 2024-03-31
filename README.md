# sharp-demo

How to replicate the issue:

1. Install dependencies

```sh
# Yarn 1.x requires --ignore-engines for Sharp
$ yarn install --ignore-engines
```

2. Run the demo

```sh
$ yarn dev
```

3. Observe that `bugged-out.jpg` is rotated 90 degrees, while `working-out.jpg` is not.
