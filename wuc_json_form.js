 POST https://api.getmati.com/v2/identities/{{_id}}/send-input 
 
 curl --location --request POST 'https://api.getmati.com/v2/identities/{{_id}}/send-input' \
 
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Bearer {{access_token}}' \
--form 'inputs=[
  {  //email address 
    "inputType": "emailAddress",
    "group": 0,
    "data": {
      "type": "email",
      "country": "BW",
    
    }
	  //cellPhone
	 "inputType": "cellPhone",
	 "group": 1,
	 "data":  {
		"type": "number",
		"country":"BW",
	
	//Plot number or physical address
	"inputType": "physicalAddress",
	 "group": 2,
	 "data":  {
		"type": "string",
		"country":"BW",
		
	//city_town/village
	"inputType": "city",
	 "group": 2,
	 "data":  {
		"type": "string",
		"country":"BW",
		
	//region
	"inputType": "region",
	 "group": 2,
	 "data":  {
		"type": "string",
		"country":"BW",
	
      //next of kin details	
	 "inputType": "nextofKin",
	 "group": 1,
	 "data":  {
		"type": "text",
		"country":"BW",
		
	 //next of kin cellPhoneNumber	
	"inputType": "cellPhoneKin",
	 "group": 1,
	 "data":  {
		"type": "number",
		"country":"BW",
		
	 //tenant or landlord 
	 //multiple options
	"inputType": "ownerStat",
	 "group": 1,
	 "data":  {
		"type": "string",
		"country":"BW",
	{
    "error": {
      "code": "validation.error"
    }
  }
  ]
	
  },
  
   