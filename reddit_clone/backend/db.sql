CREATE TABLE `posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(45) NOT NULL,
  `url` VARCHAR(45) NOT NULL,
  `date_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `score` INT NOT NULL,
  `owner` VARCHAR(45) NULL,
  `vote` INT NULL
);

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(45) NOT NULL UNIQUE,
  `password` VARCHAR(45) NULL
);


CREATE TABLE `votes` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `post_id` INT NOT NULL,
  `vote` INT NOT NULL DEFAULT 0,
   FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);


-- changed the default value of the score because it has to be 0 by default
ALTER TABLE posts MODIFY COLUMN score INT NOT NULL DEFAULT 0;

-- changed the the name of the column from id_user to id
ALTER TABLE users RENAME COLUMN id_user TO id;

-- droped some not needed column
ALTER TABLE reddit.posts DROP COLUMN vote;
ALTER TABLE reddit.posts DROP COLUMN owner;