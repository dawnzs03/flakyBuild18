-- IDEMPIERE-870
SELECT register_migration_script('202211112147_IDEMPIERE-870.sql') FROM dual;

-- Nov 11, 2022, 9:48:36 PM CET
UPDATE AD_Column SET DefaultValue='@$C_Currency_ID@',Updated=TO_TIMESTAMP('2022-11-11 21:48:36','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Column_ID=55548
;

