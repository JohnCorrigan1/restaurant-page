import Git from './../imgs/github_logo.png'

export default function createFooter(){
    const body = document.querySelector('body')

    const footer = document.createElement('footer')

    const footerP = document.createElement('p')
    footerP.classList.add('footerP')
    footerP.textContent = "Designed by: John Corrigan"

    const link = document.createElement('a')
    link.href = "https://github.com/JohnCorrigan1"
   
    const git = new Image();
    git.src = Git;
    git.classList.add('github-logo')

    body.appendChild(footer)
    footer.appendChild(footerP)
    footer.appendChild(link)
    link.appendChild(git)
}