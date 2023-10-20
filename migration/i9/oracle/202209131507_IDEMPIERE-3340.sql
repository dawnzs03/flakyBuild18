-- IDEMPIERE-3340 Adaxa's User Favorite which allow user to organize their menu, create folders
SELECT register_migration_script('202209131507_IDEMPIERE-3340.sql') FROM dual;

SET SQLBLANKLINES ON
SET DEFINE OFF

-- Sep 13, 2022, 3:07:01 PM CEST
UPDATE AD_Tab SET IsReadOnly='N',Updated=TO_TIMESTAMP('2022-09-13 15:07:01','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Tab_ID=200282
;

-- Sep 13, 2022, 3:07:06 PM CEST
UPDATE AD_Tab SET IsReadOnly='N',Updated=TO_TIMESTAMP('2022-09-13 15:07:06','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Tab_ID=200283
;

-- Sep 13, 2022, 3:11:07 PM CEST
UPDATE AD_Column SET FKConstraintType='C',Updated=TO_TIMESTAMP('2022-09-13 15:11:07','YYYY-MM-DD HH24:MI:SS'),UpdatedBy=100 WHERE AD_Column_ID=212172
;

-- Sep 13, 2022, 3:11:09 PM CEST
ALTER TABLE AD_UserPreference DROP CONSTRAINT aduser_aduserpreference
;

-- Sep 13, 2022, 3:11:09 PM CEST
ALTER TABLE AD_UserPreference ADD CONSTRAINT ADUser_ADUserPreference FOREIGN KEY (AD_User_ID) REFERENCES ad_user(ad_user_id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED
;

