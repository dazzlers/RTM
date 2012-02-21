 
 //logger file
 
 var CAN_LOG = true; 
 var DEBUG_LEVEL = "DEBUG";
 var INFO_LEVEL = "INFO";
 
 var LOG_LEVEL = DEBUG_LEVEL;
 
 
 function logme(message, page, level)
 {
	if(CAN_LOG)
	{
		if(LOG_LEVEL == DEBUG_LEVEL && level == DEBUG_LEVEL)
		{
			console.log(page + "::" + level + "::" + message )
		}
		else if(LOG_LEVEL == INFO_LEVEL && level == INFO_LEVEL)
		{
			console.log(page + "::" + level + "::" + message )
		}
	}
 }