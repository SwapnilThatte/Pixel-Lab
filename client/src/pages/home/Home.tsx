import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import './home.css'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { FileUpload } from '../../components/fileupload/FileUpload'
import { Footer } from '../../components/footer/Footer'
export const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="main-content">
            {/* <Sidebar/> */}
            <FileUpload/>
        </div>
        <div className="home-text">

        <div>What is Generative AI ?</div>
        <p>Generative artificial intelligence or generative AI is a type of artificial intelligence (AI) system capable of generating text, images, or other media in response to prompts. Generative AI models learn the patterns and structure of their input training data, and then generate new data that has similar characteristics.

          <br />
          Generative AI has potential applications across a wide range of industries, including art, writing, software development, healthcare, finance, gaming, marketing, and fashion. Investment in generative AI surged during the early 2020s, with large companies such as Microsoft, Google, and Baidu as well as numerous smaller firms developing generative AI models. However, there are also concerns about the potential misuse of generative AI, such as in creating fake news or deepfakes, which can be used to deceive or manipulate people.
        </p>

      <br />
      <br />
        <div> Convolutional Neural Networks (CNN)</div>

        <p>
          CNN, or Convolutional Neural Network, is a type of computer program that can look at pictures and understand what's in them. It does this by breaking down the picture into smaller parts and analyzing them one by one.

Imagine you're trying to recognize a cat in a picture. The CNN will start by looking for basic things like edges and corners in the picture. Then, it will look for more complex patterns like fur texture, whiskers, and cat-like shapes.

The network learns from lots of pictures that are labeled with what's in them. It adjusts its internal settings to get better at recognizing cats based on the patterns it sees in the training pictures.

Once trained, the CNN can take any new picture and tell you if it contains a cat or not. It's like a smart picture analyzer that can understand and classify images based on what it has learned.
        </p>
        
        </div>
        <Footer/>
    </div>
  )
}
