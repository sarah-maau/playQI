-- Revert playQI:init from pg

BEGIN;

DROP TABLE "level",
"answer",
"user",
"quiz",
"question",
"tag",
"quiz_has_tag";

COMMIT;
