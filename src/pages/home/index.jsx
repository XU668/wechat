import {
  View,
  Text,
  Navigator,
  Button,
  Swiper,
  SwiperItem,
  Image,
} from "@tarojs/components";
import taro from "@tarojs/taro";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { AtButton, AtGrid, AtSearchBar } from "taro-ui";
import { resetImg } from "../../utils/tools";
import "./index.scss";

function Index() {
  const [count, setCount] = useState(1);
  const { num } = useSelector((state) => state.counter);
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    taro
      .request({
        url: "http://sails.penkuoer.com/api/v1/banners",
      })
      .then((res) => {
        console.log(res);
        setBanners(res.data.data);
      });
  }, []);
  return (
    <View>
      <AtSearchBar
        placeholder="请输入搜索关键内容"
        onActionClick={(e) => {
          console.log(e);
          taro.showToast({
            title: "开始搜索了",
          });
        }}
      ></AtSearchBar>
      <Swiper
        circular
        autoplay
        interval={3000}
        indicatorDots
        indicatorColor="red"
        indicatorActiveColor="black"
      >
        {banners.map((item) => (
          <SwiperItem key={item.id}>
            <Image className="bn" src={resetImg(item.coverImage)}></Image>
          </SwiperItem>
        ))}
      </Swiper>
      <Text style={{ color: "red" }}>文本-{num}</Text>
      <Navigator url="/pages/index/index">下一个页面</Navigator>
      <AtButton type="primary" onClick={() => setCount(count + 1)}>
        按钮-{count}
      </AtButton>
      <AtGrid
        data={[
          {
            image:
              "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
            value: "领取中心",
          },
          {
            image:
              "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
            value: "找折扣",
          },
          {
            image:
              "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
            value: "领会员",
          },
          {
            image:
              "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
            value: "新品首发",
          },
          {
            image:
              "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
            value: "领京豆",
          },
          {
            image:
              "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
            value: "手机馆",
          },
        ]}
      />
    </View>
  );
}

export default Index;
