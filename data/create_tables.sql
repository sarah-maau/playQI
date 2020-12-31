-- -----------------------------------------------------
-- Schema playQI
-- -----------------------------------------------------

BEGIN;

DROP TABLE IF EXISTS "level",
"answer",
"user",
"quiz",
"question",
"tag",
"quiz_has_tag";

-- -----------------------------------------------------
-- Table "level"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "level" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- -----------------------------------------------------
-- Table "answer"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "answer" (
    "id" SERIAL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "question_id" INT NOT NULL
);

-- -----------------------------------------------------
-- Table "user"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL PRIMARY KEY,
    "firstname" TEXT NULL,
    "lastname" TEXT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user'
);

-- -----------------------------------------------------
-- Table "quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "quiz" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user" ("id")
);

-- -----------------------------------------------------
-- Table "question"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "question" (
    "id" SERIAL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "wiki" TEXT NULL,
    "level_id" INT NOT NULL REFERENCES "level" ("id"),
    -- 'Good answer'
    "answer_id" INT NOT NULL REFERENCES "answer" ("id"),
    "quiz_id" INT NOT NULL REFERENCES "quiz" ("id")
);

-- -----------------------------------------------------
-- Table "tag"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "tag" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- -----------------------------------------------------
-- Table "quiz_has_tag"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "quiz_has_tag" (
    "quiz_id" INT REFERENCES "quiz"("id"),
    "tag_id" INT REFERENCES "tag" ("id"),
    PRIMARY KEY ("quiz_id", "tag_id")
);

ALTER TABLE "answer"
    ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

COMMIT;
