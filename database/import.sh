#!/bin/bash

# import-files-mysql.sh
# Descr: Import separate SQL files for a specified database.
# Usage: Run without args for usage info.
# Author: Will Rubel
# Notes:
#  * Script will prompt for password for db access.

[ $# -lt 3 ] && echo "Usage: $(basename $0) <DB_HOST> <DB_USER> <DB_NAME>" && exit 1

DB_host=$1
DB_user=$2
DB=$3

DIR=$(dirname "$0")/tables/*


echo -n "DB password: "
read -s DB_pass
echo
echo "Importing separate SQL command files for database '$DB' into '$DB'"

file_count=0


for f in $DIR

do
    echo "IMPORTING FILE: $f"

    # gunzip -c $f | mysql -h $DB_host -u $DB_user -p$DB_pass $DB
    mysql --max_allowed_packet=100M -h $DB_host -u $DB_user -p$DB_pass $DB < $f

    (( file_count++ ))
done