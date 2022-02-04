import Player from "./Bottombar/Player"

export default function bottombar() {
    return(
      <div className="h-24 bg-footer border-t border-white border-opacity-5 p-4">
          <Player />
      </div>
    )
  }