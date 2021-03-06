CREATE SCHEMA foxplayer;

CREATE TABLE playlists(
	id INT AUTO_INCREMENT PRIMARY KEY,
	playlist TINYTEXT NOT NULL,
	system_ TINYINT(1) DEFAULT 0
);

CREATE TABLE tracks(
	id INT AUTO_INCREMENT PRIMARY KEY,
	path TINYTEXT NOT NULL,
	playlist_id INT,
		FOREIGN KEY (playlist_id)
		REFERENCES playlists(id)
);

INSERT INTO playlists (playlist,system_) VALUES("Favourites",1);