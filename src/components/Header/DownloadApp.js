import React from 'react';
import {Icon} from 'components/Icons';


export default function DownloadApp() {
  return (
      <div>
          <a className='flex gap-x-4 py-2 text-link hover:text-white transition-colors items-center' href="#">
          <span><Icon name="menudownload" /></span>
          <span className='text-sm font-bold'>Uygulamayı Yükle</span>
          </a>
      </div>
  )
}
