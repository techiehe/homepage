"use client"

import * as React from "react"
import { MenuOutlined } from "@ant-design/icons"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const menus = [
  {
    title: "经验",
    href: "#skill",
  },
  {
    title: "项目",
    href: "#projects",
  },
  {
    title: "博客",
    target: '_blank',
    href: "https://blog.huala.fun",
  },
  {
    title: "网站心电图",
    target: '_blank',
    href: "https://status.huala.fun",
  },
]

const NotPcScreen = () => {
  return (
    <nav id="hamburger-nav" className="flex justify-between text-xl lg:hidden">
      <div className="logo">Huala</div>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MenuOutlined className="text-xl cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {
              menus.map(item => {
                return (
                  <DropdownMenuItem key={item.href} className="cursor-pointer" onClick={() => {
                    if (item.target) {
                      window.open(item.href, item.target)
                    } else {
                      location.href = item.href
                    }
                  }}>
                    {item.title}
                  </DropdownMenuItem>
                )
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>
        <SwitchDarkMode />
      </div>
    </nav>
  )
}


const SwitchDarkMode = () => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="sm">
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          浅色模式
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          黑暗模式
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          跟随系统
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


const PCScreen = () => {
  return (
    <nav id="desktop-nav" className="flex justify-between my-4 text-xl max-lg:hidden">
      <div className="logo">
        <a href="/">Huala</a>
      </div>
      <div className="flex gap-1 items-center">
        <ul className="nav-links flex gap-4 items-center">
          {
            menus.map((menu) => (
              <li key={menu.href} className="hover:decoration-slate-500	 hover:underline hover:underline-offset-8"><a href={menu.href} target={menu?.target}>{menu.title}</a></li>
            ))
          }
        </ul>
        <SwitchDarkMode />
      </div>
    </nav>
  )
}


const Nav = () => {

  return (
    <>
      {/* 在 lg 以下屏幕隐藏 */}
      <PCScreen />
      {/* 在 lg 以上屏幕隐藏 */}
      <NotPcScreen />
    </>
  )
}

export default Nav;