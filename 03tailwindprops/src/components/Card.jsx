import React from 'react'

function Card({username = "Username", quote = "User's quote", twitterHandle = "User's Twitter Handle"}) {
    console.log("Props:",username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://avatars.githubusercontent.com/u/11613311?v=4"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
    {quote}
    </p>
    <div>
    <a className=' text-gray-300 underline text-xs' href="https://twitter.com/hiteshdotcom" target='blank'> {twitterHandle}</a>
    </div>
    <a href="https://github.com/hiteshchoudhary" target='_blank'><button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black bg-white">
      View Profile →
    </button></a>
  </div>
</div>
  )
}
export default Card