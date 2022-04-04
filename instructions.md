install ```babel-cli as global``` (optional) ```sudo npm install -g babel-cli```

install ```babel-preset-es2015``` (optional. if your code using es6 standard) ```npm install babel-preset-es2015```

install ```babel-preset-react``` (required)

configuration

in your root of project, add this file ```.babelrc``` and write this to it

```npm
{
  "presets": ["es2015", "react"]
}
```

or

```npm
{
  "presets": ["react"]
}
```

run

```npm
babel source_dir -d target_dir
```