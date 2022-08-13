LOAD DATA INFILE '/tmp/likes.csv'
INTO TABLE likes FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'
IGNORE 1 LINES (
  postId, user, @date
)

SET date = STR_TO_DATE(@date, '%Y-%m-%dT%T.%fZ')
;
