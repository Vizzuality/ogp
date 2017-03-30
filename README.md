# What is the Open Government Partnership?

[Open Government Partnership](http://www.opengovpartnership.org/) (OGP) is a
project that was launched in 2011 to provide an international platform for domestic reformers committed to making their governments more open, accountable, and responsive to citizens.

This repository contains the new OGP web app of 2016.

![Cover picture](/sites/all/themes/custom/ogp_theme/screenshot.png?raw=true "Cover Home page")


# Technology and dependencies

The project is based on [Drupal 7](https://www.drupal.org/). You will also need [npm](https://www.npmjs.com/) to install
and process JavaScript and SASS assets.

# Set up - native

A [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) or similar stack is recommended, although the project should
also work with different operating systems, web servers or database servers. Follow any Drupal 8 installation guide to learn
how to set up your environment



To build the project assets (JavaScript and CSS compiling) you first need to install the asset compiler and its dependencies:

```
npm install
```

After, run the following command to generate the actual assets:

```
npm run build
```

If you are manipulating those assets, you might prefer a watch command, that tracks changes and automatically updates the
generated files

```
npm run watch
```

# Set up - Docker

#### Copy Docker's settings file (only once)
 * In the terminal, move to the project root and execute:
 ```
 cp sites/default/settings.docker.php sites/default/settings.php
 ```

#### Populate the database
 * See the instructions bellow on how to import existing data to your database:

#### Build the image using Docker Composer
- Install dependencies
```
npm install
```

- Start the project
```
npm start docker
```


#### Enjoy
  * Open the browser and access [http://localhost:8010](http://localhost:8010)


#### Extra - To access the server's bash
 * Open the terminal and type:
 ```
 docker exec -ti ogp bash
 ```


## Managing your database

As Drupal projects rely heavily on the database, you need to make sure to import and export your database at relevant times


### Using a local database server

#### Importing from source to local database server

```
database/import.sh <host> <user> <database>
```

#### Exporting from local database server to source

```
database/export.sh <host> <user> <database>
```

### Using a docker database container

#### Importing from source to local database server

```
docker exec -ti ogp /var/www/html/database/import.sh db root ogp
```

#### Exporting from local database server to source

Use the following to clear caches:

```
docker exec -ti ogp drush cc all
```

Then, use this command to export the database:

```
docker exec -ti ogp /var/www/html/database/export.sh db root ogp
```

# License

This project is available as OSS under the [GPL v2](/LICENSE.txt) license
