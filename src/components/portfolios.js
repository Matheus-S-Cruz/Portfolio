export const Portfolios = () =>{

    return(
      <div className="portfolios text-center py-8">
      <h3 className="text-2xl font-bold mb-4">Portfólios anteriores:</h3>
      <div className="flex justify-center">
        <a href="https://www.canva.com/design/DAE9G9WvBpQ/i3tcIBCqk2oaM_BLxiuNXQ/edit?utm_content=DAE9G9WvBpQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <button className="mr-4 p-3 w-60 border border-#04AA6D text-1 uppercase rounded-lg outline-none shadow-lg hover:shadow-xl hover:rounded-3xl duration-200">
            Portfólio 2022
          </button>
        </a>
        <a href="https://www.canva.com/design/DAFxtkB93nA/iUg8nZJwq4JvNgzCZOQsWw/edit?utm_content=DAFxtkB93nA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <button className="ml-4 p-3 w-60 border border-#04AA6D text-1 uppercase rounded-lg outline-none shadow-lg hover:shadow-xl hover:rounded-3xl duration-200">
            Portfólio 2023
          </button>
        </a>
      </div>
    </div>
    )
}