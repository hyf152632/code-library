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