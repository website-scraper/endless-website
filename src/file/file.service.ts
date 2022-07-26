import { Injectable } from '@nestjs/common';
import { createCanvas, JPEGStream, PNGStream } from 'canvas';
import * as uniqolor from 'uniqolor';

@Injectable()
export class FileService {
  createImageStream({
    text='test image', 
    width = 600,
    height = 600
  }: {
    text?: string,
    width?: number,
    height?: number 
  }): JPEGStream {

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    const gradient = context.createLinearGradient(0, height, width, 0);
    gradient.addColorStop(0, getRandomColor());
    gradient.addColorStop(1, getRandomColor());
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    const fontSize = 60;
    context.font = `bold ${fontSize}px Menlo`;
    context.textBaseline = 'middle';
    context.textAlign = 'center';

    const textWidth = context.measureText(text).width;

    context.fillStyle = '#000';
    context.fillRect((width - textWidth) / 2 - 10, (height - fontSize) / 2 - 10, textWidth + 20, fontSize + 20);
    
    context.fillStyle = '#fff';
    context.fillText(text, width / 2, height / 2);

    return canvas.createPNGStream({compressionLevel: 0});
  }
}

function getRandomColor():string {
    const color = uniqolor.random({
        saturation: [50, 100],
        lightness: [50, 80],
    });
    return color.color;
}