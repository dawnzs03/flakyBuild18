-- IDEMPIERE-5242 RfQ Issues
SELECT register_migration_script('202203250113_IDEMPIERE-5242.sql') FROM dual;

SET SQLBLANKLINES ON
SET DEFINE OFF

-- Mar 25, 2022, 1:13:22 AM CET
UPDATE AD_Window SET IsSOTrx='N',Updated=TO_TIMESTAMP('2022-03-25 01:13:22','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Window_ID=324
;

-- Mar 25, 2022, 1:13:28 AM CET
UPDATE AD_Window SET IsSOTrx='N',Updated=TO_TIMESTAMP('2022-03-25 01:13:28','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Window_ID=314
;

-- Mar 25, 2022, 1:14:03 AM CET
UPDATE AD_Column SET IsUpdateable='Y',Updated=TO_TIMESTAMP('2022-03-25 01:14:03','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Column_ID=11032
;

