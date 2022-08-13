CREATE TABLE likes (
  postId INT NOT NULL, 
  user VARCHAR(100) NOT NULL, 
  date DATETIME NOT NULL,
  PRIMARY KEY (postId, user)
);
