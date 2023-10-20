-- IDEMPIERE-5342_ProfileInfo
SELECT register_migration_script('202209010924_IDEMPIERE-5342.sql') FROM dual;

-- Sep 1, 2022, 9:24:17 AM CEST
UPDATE AD_Column SET FieldLength=4000,Updated=TO_TIMESTAMP('2022-09-01 09:24:17','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=0 WHERE AD_Column_ID=14927
;

-- Sep 1, 2022, 9:24:18 AM CEST
INSERT INTO t_alter_column values('ad_issue','ProfileInfo','VARCHAR(4000)',null,'NULL')
;

-- Sep 1, 2022, 9:24:30 AM CEST
UPDATE AD_Column SET FieldLength=4000,Updated=TO_TIMESTAMP('2022-09-01 09:24:30','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=0 WHERE AD_Column_ID=14959
;

-- Sep 1, 2022, 9:24:31 AM CEST
INSERT INTO t_alter_column values('r_issueproject','ProfileInfo','VARCHAR(4000)',null,'NULL')
;

-- Sep 1, 2022, 9:25:23 AM CEST
UPDATE AD_Column SET FieldLength=4000,Updated=TO_TIMESTAMP('2022-09-01 09:25:23','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=0 WHERE AD_Column_ID=14971
;

-- Sep 1, 2022, 9:25:25 AM CEST
INSERT INTO t_alter_column values('r_issuesystem','ProfileInfo','VARCHAR(4000)',null,'NULL')
;

