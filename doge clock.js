/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		/*{
			module: "alert",
		},*/
		
		
		/*{
			module: "updatenotification",
			position: "top_bar"
		},*/
		
		
		{
			module: "clock",
			position: "top_bar"
			
		},

		/*
		{
			module: "calendar",
			header: "Stuff to do",
			position: "top_left",
			config: {
			
				maximumEntries: "15",
				
				calendars: [
				
				
					{
						symbol: "US Holidays",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"			
					},
					{
						symbol: "KC Family",
						url: "https://calendar.google.com/calendar/ical/9l8v1sto2upa18efk3k96u1di0%40group.calendar.google.com/private-16f2590555fe9625206bed4ee4722d30/basic.ics"					
					},	
					{
						symbol: "Kechang Wang",
						url: "https://calendar.google.com/calendar/ical/kechangw%40gmail.com/private-0e74d3d12ad67f525ce5603db68fb77c/basic.ics"					
					},
					{
						symbol: "Mr K Stuidos",
						url: "https://calendar.google.com/calendar/ical/cava9glcfbcadm6h48c9kai088%40group.calendar.google.com/private-f7080027f9115526fcff913a98c7d95e/basic.ics"					
					},
						
					{
						symbol: "LA Lakers",
						url: "https://calendar.google.com/calendar/ical/qt3rbukf7349rgm35cv67s1gj8%40group.calendar.google.com/private-e5675ff116d0d26496cf51b6c3afa5a2/basic.ics"					
					},
					
				]
			}
		},*/

		
	
		/*{
			module: "compliments",
			position: "lower_third"
		},*/

/*
		{
			module: "currentweather",
			position: "bottom_bar",
			config: {
				location: "San Jose",
				locationID: "5392171", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "89ee1961afd1aad503940d2be2493e75"
			}
		},



		
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "San Jose",
				locationID: "5392171", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "89ee1961afd1aad503940d2be2493e75"
			}
		},
*/

		
		/*{
  			module: "MMM-MktIndex",
  			position: "top_right",
  			config: {
    					timeFormat: "DD-MM HH:mm",
    					symbols: ["^DJI", "^IXIC", "^GSPC", "^TNX", "CL=F", "DOGE-USD"],
    					// Label name for each symbol. When you use `alias`, the number of symbols and aliases should be the same.
    					// If value is null or "", symbol string will be used by default.
    					alias: ["DOW 30", "Nasdaq", "S&P 500", "10yr Bond", "Crude Oil", "DOGCOIN"],
    					updateInterval: 180,    // Query interval in seconds
  				}
		},*/
		
		
		{
			module: "MMM-cryptocurrency",
			position: "top_center",
			config: {
					apikey: '1b6f79eb-dd35-429d-8f88-3ce06bcb3511',
					currency: ['dogecoin','ethereum','bitcoin'],
					//showGraphs: 'true',
					//coloredLogos: 'false',
					//conversion: 'EUR',
					//displayLongNames: 'true'
					headers: ['change24h'],
					displayType: 'detail',
					
				}
		},
		

		/*
		{
  			//disabled:true,
  			module: "MMM-AVStock",
  			position: "top_center",
  			config: {
    					apiKey : "TFHB4RDLUXFFVH9O",
    					symbols : ["AAPL", "GOOGL", "TSLA","NIO", "AMC","BB","BABA", "NXPI","NVDA","BA"],
    					alias: ["APPLE", "GOOGLE", "TESLA", "NIO", "AMC","BB","ALIBABA","NXP SEMI","NVIDIA","BOEING"],
    					mode: "grid",
    					direction:'row',
    					chartDays: 30,
    					width: 700,
    					
  				}
		},

		*/

		/*
  		{
    			module: 'MMM-WiFiPassword',
    			position: "bottom_right",
      			config: {
        				//See 'Configuration options' for more information.
        				network: "NETGEAR89", 
        				password: "shinyoctopus276",
      				}
  		},
  		*/



  		{
  			module: 'MMM-Screencast',
			position: 'center', // This position is for a hidden <div /> and not the screencast window
			config: {
					position: 'center',
					height: 300,
					width: 500,
				}
		},
		
		/*{
			module: 'MMM-Todoist',
			position: 'bottom_left',	// This can be any of the regions. Best results in left or right regions.
			header: 'Todoist', // This is optional
			config: { // See 'Configuration options' for more information.
				hideWhenEmpty: false,
				accessToken: '7af2db85f6b767afd498750d0ee8a89319dfcee5',
				maximumEntries: 60,
				updateInterval: 10*60*1000, // Update every 10 minutes
				fade: false,    
				showProject: false,  
				maxTitleLength: 50,
				wrapEvents: false, 
			// projects and/or labels is mandatory:
				projects: [ 2182480886 ], 
				labels: [ "Important" ] // Tasks for any projects with these labels will be shown.
      				}
		},*/
		
		/*{
    			module: 'MMM-bitcoin',
    			position: "bottom center",
    			config: {
      					fiat: 'usd',          // 'usd' and 'eur' available, defaults to 'usd'
      					showBefore: 'Bitcoin',    // will display before the bitcoin price, default 'Bitstamp'
      					updateInterval: 60000 // update interval in milliseconds
    				}
  		},*/
		
		
		
		/*{
			module: "newsfeed",
			position: "bottom center",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},*/
		
		
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				//source: ["/r/cityporn+foodporn"],
				//source: ["/r/cityporn"],
				source: ["chromecast"],
				crossfade: false,
				slideInterval: 3 * 60 * 1000,
				//orientation: "vertical",
				//maximumEntries: 10,
				}
			
		},
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
