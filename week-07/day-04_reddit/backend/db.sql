CREATE TABLE posts (
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


-- changed the default value of the score because it has to be 0 by default
ALTER TABLE posts MODIFY COLUMN score INT NOT NULL DEFAULT 0;
