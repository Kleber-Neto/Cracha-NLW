const linksSocialMidia = {
							github: "Kleber-Neto",
							facebook: "Kleberneto10",
							instagram: "Kleberneto10",
							Twitter: "Kleberneto29"
							}
							
							function changeSocialMidiaLinks() {
							 for (let li of socialLinks.children) {
							 const social =     
							 li.getAttribute("class")
							 							 
							 li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
							}
							}
							
							changeSocialMidiaLinks()
							
							function getGithubProfileInfos() {
											const url = `https://api.github.com/users/${linksSocialMidia.github}`
											
											fetch(url)
											.then(response => response.json())
											.then(data => {
											userName.textContent = data.name
											userBio.textContent = data.bio
											userLink.href = data.html_url
											userImage.src = data.avatar_url
											userLogin.textContent = data.login
											})
							}
							
							getGithubProfileInfos()