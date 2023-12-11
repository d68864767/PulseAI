-- Create the AnalysisResult table
CREATE TABLE AnalysisResult (
  id INT PRIMARY KEY AUTO_INCREMENT,
  result VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the DataStream table
CREATE TABLE DataStream (
  id INT PRIMARY KEY AUTO_INCREMENT,
  data VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the User table
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial data for AnalysisResult table
INSERT INTO AnalysisResult (result) VALUES ('Anomaly detected'), ('No anomaly detected');

-- Seed initial data for DataStream table
INSERT INTO DataStream (data) VALUES ('Data stream 1'), ('Data stream 2');

-- Seed initial data for User table
INSERT INTO User (username, password) VALUES ('admin', 'admin123');
