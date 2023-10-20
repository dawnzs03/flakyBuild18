/******************************************************************************
 * Product: iDempiere ERP & CRM Smart Business Solution                       *
 * Copyright (C) 1999-2012 ComPiere, Inc. All Rights Reserved.                *
 * This program is free software, you can redistribute it and/or modify it    *
 * under the terms version 2 of the GNU General Public License as published   *
 * by the Free Software Foundation. This program is distributed in the hope   *
 * that it will be useful, but WITHOUT ANY WARRANTY, without even the implied *
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.           *
 * See the GNU General Public License for more details.                       *
 * You should have received a copy of the GNU General Public License along    *
 * with this program, if not, write to the Free Software Foundation, Inc.,    *
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA.                     *
 * For the text or an alternative of this public license, you may reach us    *
 * ComPiere, Inc., 2620 Augustine Dr. #245, Santa Clara, CA 95054, USA        *
 * or via info@compiere.org or http://www.compiere.org/license.html           *
 *****************************************************************************/
/** Generated Model - DO NOT CHANGE */
package org.eevolution.model;

import java.sql.ResultSet;
import java.util.Properties;
import org.compiere.model.*;
import org.compiere.util.KeyNamePair;

/** Generated Model for C_TaxType
 *  @author iDempiere (generated)
 *  @version Release 11 - $Id$ */
@org.adempiere.base.Model(table="C_TaxType")
public class X_C_TaxType extends PO implements I_C_TaxType, I_Persistent
{

	/**
	 *
	 */
	private static final long serialVersionUID = 20230409L;

    /** Standard Constructor */
    public X_C_TaxType (Properties ctx, int C_TaxType_ID, String trxName)
    {
      super (ctx, C_TaxType_ID, trxName);
      /** if (C_TaxType_ID == 0)
        {
			setC_TaxType_ID (0);
			setName (null);
			setValue (null);
        } */
    }

    /** Standard Constructor */
    public X_C_TaxType (Properties ctx, int C_TaxType_ID, String trxName, String ... virtualColumns)
    {
      super (ctx, C_TaxType_ID, trxName, virtualColumns);
      /** if (C_TaxType_ID == 0)
        {
			setC_TaxType_ID (0);
			setName (null);
			setValue (null);
        } */
    }

    /** Standard Constructor */
    public X_C_TaxType (Properties ctx, String C_TaxType_UU, String trxName)
    {
      super (ctx, C_TaxType_UU, trxName);
      /** if (C_TaxType_UU == null)
        {
			setC_TaxType_ID (0);
			setName (null);
			setValue (null);
        } */
    }

    /** Standard Constructor */
    public X_C_TaxType (Properties ctx, String C_TaxType_UU, String trxName, String ... virtualColumns)
    {
      super (ctx, C_TaxType_UU, trxName, virtualColumns);
      /** if (C_TaxType_UU == null)
        {
			setC_TaxType_ID (0);
			setName (null);
			setValue (null);
        } */
    }

    /** Load Constructor */
    public X_C_TaxType (Properties ctx, ResultSet rs, String trxName)
    {
      super (ctx, rs, trxName);
    }

    /** AccessLevel
      * @return 3 - Client - Org
      */
    protected int get_AccessLevel()
    {
      return accessLevel.intValue();
    }

    /** Load Meta Data */
    protected POInfo initPO (Properties ctx)
    {
      POInfo poi = POInfo.getPOInfo (ctx, Table_ID, get_TrxName());
      return poi;
    }

    public String toString()
    {
      StringBuilder sb = new StringBuilder ("X_C_TaxType[")
        .append(get_ID()).append(",Name=").append(getName()).append("]");
      return sb.toString();
    }

	/** Set Tax Type.
		@param C_TaxType_ID Tax Type
	*/
	public void setC_TaxType_ID (int C_TaxType_ID)
	{
		if (C_TaxType_ID < 1)
			set_ValueNoCheck (COLUMNNAME_C_TaxType_ID, null);
		else
			set_ValueNoCheck (COLUMNNAME_C_TaxType_ID, Integer.valueOf(C_TaxType_ID));
	}

	/** Get Tax Type.
		@return Tax Type	  */
	public int getC_TaxType_ID()
	{
		Integer ii = (Integer)get_Value(COLUMNNAME_C_TaxType_ID);
		if (ii == null)
			 return 0;
		return ii.intValue();
	}

	/** Set C_TaxType_UU.
		@param C_TaxType_UU C_TaxType_UU
	*/
	public void setC_TaxType_UU (String C_TaxType_UU)
	{
		set_Value (COLUMNNAME_C_TaxType_UU, C_TaxType_UU);
	}

	/** Get C_TaxType_UU.
		@return C_TaxType_UU	  */
	public String getC_TaxType_UU()
	{
		return (String)get_Value(COLUMNNAME_C_TaxType_UU);
	}

	/** Set Description.
		@param Description Optional short description of the record
	*/
	public void setDescription (String Description)
	{
		set_Value (COLUMNNAME_Description, Description);
	}

	/** Get Description.
		@return Optional short description of the record
	  */
	public String getDescription()
	{
		return (String)get_Value(COLUMNNAME_Description);
	}

	/** Set Comment/Help.
		@param Help Comment or Hint
	*/
	public void setHelp (String Help)
	{
		set_Value (COLUMNNAME_Help, Help);
	}

	/** Get Comment/Help.
		@return Comment or Hint
	  */
	public String getHelp()
	{
		return (String)get_Value(COLUMNNAME_Help);
	}

	/** Set Name.
		@param Name Alphanumeric identifier of the entity
	*/
	public void setName (String Name)
	{
		set_Value (COLUMNNAME_Name, Name);
	}

	/** Get Name.
		@return Alphanumeric identifier of the entity
	  */
	public String getName()
	{
		return (String)get_Value(COLUMNNAME_Name);
	}

    /** Get Record ID/ColumnName
        @return ID/ColumnName pair
      */
    public KeyNamePair getKeyNamePair()
    {
        return new KeyNamePair(get_ID(), getName());
    }

	/** Set Search Key.
		@param Value Search key for the record in the format required - must be unique
	*/
	public void setValue (String Value)
	{
		set_Value (COLUMNNAME_Value, Value);
	}

	/** Get Search Key.
		@return Search key for the record in the format required - must be unique
	  */
	public String getValue()
	{
		return (String)get_Value(COLUMNNAME_Value);
	}
}