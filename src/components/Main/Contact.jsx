import { contactAssets } from "../../assets/assets";

const Contact = () => {
  return (
    <div id="contact" className='flex flex-col gap-2 p-4 items-center'>
      <div>
        <p className='text-xl'>Connect with <span className='text-[hsl(var(--accent-color))] font-semibold'>ME</span></p>
      </div>
      <div>
        <div className="flex gap-4 sm:flex-col">
          {contactAssets.map((asset, i) => {
            return <div key={i}>
              <img src={asset.icon} className="w-6" />
            </div>
          })}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Contact;