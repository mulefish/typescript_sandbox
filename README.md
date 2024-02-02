# typescript_sandbox
typescript sandbox

# REPO
https://github.com/mulefish/typescript_sandbox/

# Files of current interest:
version2_tdd.js in the dist dir  
robot.js in the src dir  


# COMMANDS
npm run build // javac    
npm run tdd // test   
npm run server // web server  

# RUN THE SERVER
CLI: npm run server   
Browser: http://localhost:3000/version2.html

# screencap : Good match example
Things to notice here:  
 - I have NOT told the system what event this is; It auto-determined that. 
 - Wicked fast; it took less-than-a-millisecond for The Decider to make its determination
 - 'CommonClick' maps into these events: ExitLinkClick,FAQClick,LinkClick,LiveChatClick,NavigationLinkClick,TopBannerClick

![image1.png](./image1.png)

# screencap : Bad match example
Things to notice here:
- The language of 'penny' is un-possible, hence the red
- Wicked fast; it took less-than-a-millisecond for The Decider to make its determination

![image2.png](./image2.png)
