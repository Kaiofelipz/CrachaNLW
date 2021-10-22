    
        const LinksSocialMedia = {

            youtube: "channel/UCFeQlvL9-3gwgWI2U_CdkDA",
            github: "Kaiofelipz",
            facebook: "kaio.felipe.353",
            instagram: "Kaiofelipz",
            twitter: "Kaiofelipz"
       }

       function changeSocialLinks(){

       for(let li of socialLinks.children){
           const social = li.getAttribute('class')
               li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` 
                   

       }
       
           
       }

       changeSocialLinks()

       function getGithubProfileInfos(){

        const url = `https://api.github.com/users/${LinksSocialMedia.github} `

        fetch(url).then(response => response.json ()).then(data => {
            userName.textContent = data.name 
            userBio.textContent = data.bio
            userPhoto.src = data.avatar_url
        })

        }

       getGithubProfileInfos()
