CREATE SCHEMA 'reddit';


CREATE TABLE 'reddit'.'posts' (
  'id' INT AUTO_INCREMENT,
  'title' VARCHAR(45) NOT NULL,
  'url' VARCHAR(45) NOT NULL,
  'date_time' TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  'score' INT NOT NULL,
  'owner' VARCHAR(45) NULL,
  'vote' INT NULL,
  PRIMARY KEY ('id'),
  UNIQUE INDEX 'id_UNIQUE' ('id' ASC) VISIBLE);


-- changed the default value of the score because it has to be 0 by default
  ALTER TABLE reddit.posts MODIFY COLUMN score INT NOT NULL DEFAULT 0;


  local storage; -- 