srcset
语法

srcset 有两种自定义方式，一种使用 x 来区分设备像素比 (DPR)，另一种使用 w 来描述图像的宽度。
对设备像素比的反应

<img src="image_2x.jpg" srcset="image_2x.jpg 2x, image_1x.jpg 1x" alt="a cool image">
将 srcset 设置为与逗号分隔的一连串 filename multiplier 对相等，其中每个 multiplier 必须是后跟 x 的整数。
例如，1x 表示 1 倍显示屏，2x 表示像素密度为两倍的显示屏，如 Apple 的 Retina 显示屏。
浏览器会下载与其 DPR 对应的最佳图片。
另请注意，有一个作为备用的 src 属性。
对图片宽度的反应

<img src="image_200.jpg" srcset="image_200.jpg 200w, image_100.jpg 100w" alt="a cool image">
将 srcset 设置为与逗号分隔的一连串 filename widthDescriptor 对相等，其中每个 widthDescriptor 都以像素为测量单位， 
并且必须是后跟 w 的整数。在这里，widthDescriptor 指定每个图片文件的自然宽度，使浏览器能够根据窗口大小和 DPR 选择要请求的最适当的图片。 （
如果没有 widthDescriptor，浏览器需要下载图片才能知道其宽度！）
另请注意，有一个作为备用的 src 属性。  

关于响应式网页设计    
媒体查询的断点不应该由具体的设备来决定，而应该根据设计自身来决定。这不仅是因为我们的网站需要面向的设 备太多了（尤其是考虑到未来的设备时），  
还因为一个网站在桌面端可能会以任意尺寸的窗口来显示。如果你有信心自己的设计在任何可能出现的视口 尺寸下都能良好工作，谁关心这些设备的分辨率具体是多少呢？  
下面还有一些建议，可能会帮你避免不必要的媒体查询。  
使用百分比长度来取代固定长度。如果实在做不到这一点，也应该 尝试使用与视口相关的单位（vw、vh、vmin 和 vmax），它们的值解析为视口宽度或高度的百分比。  
当你需要在较大分辨率下得到固定宽度时，使用 max-width 而不是 width，因为它可以适应较小的分辨率，而无需使用媒体查询。  
不要忘记为替换元素（比如 img、object、video、iframe 等）设 置一个 max-width，值为 100%。  
假如背景图片需要完整地铺满一个容器，不管容器的尺寸如何变化， background-size: cover 这个属性都可以做到。  
但是，我们也要时 刻牢记——带宽并不是无限的，因此在移动网页中通过 CSS 把一张大图缩小显示往往是不太明智的。  
当图片（或其他元素）以行列式进行布局时，让视口的宽度来决定 列的数量。弹性盒布局（即 Flexbox）或者 display: inline-block加上常规的文本折行行为，都可以实现这一点。  
在使用多列文本时，指定 column-width（列宽）而不是指定 column-count（列数），这样它就可以在较小的屏幕上自动显示为单列布局。  

