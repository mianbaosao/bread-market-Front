import {LuckyWheelPage} from "@/app/pages/lucky/lucky-wheel-page";
import {LuckyGridPage} from "@/app/pages/lucky/lucky-grid-page";
import {SlotMachine} from "@/app/pages/lucky/slot-machine-page";

/**
 * 主页面显示
 * @constructor
 */
export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* 头部文案 */}
        <header className="text-3xl font-bold text-center text-gray-800 my-8">
          面包营销平台 - 抽奖展示
        </header>

        {/* 中间的两个div元素 */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700">
              <LuckyWheelPage/>
            </p>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700">
              <LuckyGridPage/>
            </p>
          </div>
        </div>

        {/* 底部文案 */}
        <footer className="text-gray-600 text-center my-8">
          本项目为 面包营销平台 @Bread
        </footer>
      </div>
  );
}
