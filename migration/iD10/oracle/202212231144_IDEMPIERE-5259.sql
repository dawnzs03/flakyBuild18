-- IDEMPIERE-5259 (CRM) Labels/tags feature + IDEMPIERE-5523
SELECT register_migration_script('202212231144_IDEMPIERE-5259.sql') FROM dual;

SET SQLBLANKLINES ON
SET DEFINE OFF

-- Dec 23, 2022, 11:44:06 AM CET
UPDATE AD_Field SET IsDisplayedGrid='N',Updated=TO_TIMESTAMP('2022-12-23 11:44:06','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Field_ID=207024
;

-- Dec 23, 2022, 11:44:27 AM CET
UPDATE AD_Field SET IsDisplayedGrid='N',Updated=TO_TIMESTAMP('2022-12-23 11:44:27','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Field_ID=207032
;

-- Dec 23, 2022, 11:44:50 AM CET
UPDATE AD_Field SET IsDisplayedGrid='N',Updated=TO_TIMESTAMP('2022-12-23 11:44:50','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Field_ID=207050
;

-- Dec 23, 2022, 11:45:06 AM CET
UPDATE AD_Field SET IsDisplayedGrid='N',Updated=TO_TIMESTAMP('2022-12-23 11:45:06','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Field_ID=207104
;

