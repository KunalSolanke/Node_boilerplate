# Nodejs boilerplate

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkStn_FengP4Z2_GySuRaKOvCdE1PWWaK0A&usqp=CAU" align="center">
<br/>
<br/>
    
     This is just another nodejs boilerplate with docker and eslint configuration

## Skeleton

Here is the basic suggested skeleton for your app repo that each of the starter templates conforms to:

```bash
├── bin/www(server file)
├── controllers(all the views)
├── routes(all the routes)
├── models (all database models)
├── views
│    ├── **/*.js(ejs views)
├── public
    ├──uploads(all the media uploaded by user)
│   ├── css
│   │   ├── **/*.css
│   ├── images
│   ├── js
│   │   ├── **/*.js
│   └── partials/template
├── README.md
├── node_modules
├── Dockerfile
├── docker_compose.yaml
├── package.json
├── yarn.lock(if using yarn)
└── .gitignore
```

> If you are using multer to save files on disc,configure it to save files inside pulblic>upload folder

## Dev Setup

The docker files and environment variables are configured to be spin up mongo db inside one docker container and your applications inside another container.If you want to learn docker here is full [tutorial]()

> NOTE : Please do not remove the environment the variables already present inside the env file

```bash
  #To start the containers
  docker-compose up
  #Stop containers in diff terminal than docker
  docker-compose --volumes down
```

## Editor Setup

If you're using Visual Studio Code, you can install the ESLint extension, which
will automatically highlight warnings and errors using this boilerplate.

1. Press **Ctrl + Shift + X** or click the **Extensions** button
2. Search for **ESLint** and **Prettier(to format your code)**
3. Click the **Install** button next to the **ESLint** search result

With this extension, you can also choose to automatically fix/format your code
when you save. Add the following to your Visual Studio Code settings.

```
"eslint.autoFixOnSave": true
"editor.formatOnSave": true,
```

This setting only takes effect if `files.autoSave` is set to `off`,
`onFocusChange`, or `onWindowChange`.
