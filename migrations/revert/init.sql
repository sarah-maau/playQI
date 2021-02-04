-- Revert playQI:init from pg

BEGIN;

DROP TABLE IF EXISTS "level",
"answer",
"user",
"quiz",
"question",
"tag",
"quiz_has_tag";

COMMIT;
