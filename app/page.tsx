"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Eye,
  Shield,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 py-2 px-4 lg:px-6 h-16 flex items-center justify-between border-b z-50 bg-background shadow-sm">
        <div className="flex items-center gap-2">
          <Eye className="h-6 w-6" />
          <span className="text-xl font-bold">FlexFocus</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <p
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault();
              const mainSection = document.querySelector("main");
              if (mainSection) {
                mainSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Home
          </p>
          <p
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About
          </p>
          <p
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault();
              const productsSection = document.querySelector("#products");
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Products
          </p>
          <p
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault();
              const reviewsSection = document.querySelector("#reviews");
              if (reviewsSection) {
                reviewsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Reviews
          </p>
        </nav>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden"
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenu) {
              mobileMenu.classList.toggle("hidden");
            }
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div
          id="mobile-menu"
          className="hidden fixed top-16 right-4 bg-background border rounded-md shadow-md p-4 z-40"
        >
          <div className="flex flex-col gap-4">
            <p
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault();
                const mainElement = document.querySelector("main");
                if (mainElement) {
                  mainElement.scrollIntoView({ behavior: "smooth" });
                }
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.add("hidden");
                }
              }}
            >
              Home
            </p>
            <p
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.querySelector("#about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.add("hidden");
                }
              }}
            >
              About
            </p>
            <p
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault();
                const productsElement = document.querySelector("#products");
                if (productsElement) {
                  productsElement.scrollIntoView({ behavior: "smooth" });
                }
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.add("hidden");
                }
              }}
            >
              Products
            </p>
            <p
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault();
                const reviewsElement = document.querySelector("#reviews");
                if (reviewsElement) {
                  reviewsElement.scrollIntoView({ behavior: "smooth" });
                }
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.add("hidden");
                }
              }}
            >
              Reviews
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="hidden md:flex">
          Contact Us
        </Button>
      </header>
      <main className="flex flex-col w-svw justify-center items-center">
        <section className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid w-full gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center gap-y-4">
                <div className="w-full">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    Introducing FlexFocus
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    The next generation of eyewear with adjustable features for
                    perfect vision in any environment.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={() => {
                      const productsElement =
                        document.querySelector("#products");
                      if (productsElement) {
                        productsElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/hero.webp"
                  width={550}
                  height={550}
                  alt="FlexFocus Eyeglasses"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex justify-center items-center w-svw py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About FlexFocus
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FlexFocus combines cutting-edge technology with elegant design
                  to create eyewear that adapts to your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="flex flex-col md:items-center md:mx-auto md:w-[500px] gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <h3 className="text-xl font-bold">Premium Materials</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Crafted with titanium for durability and lightweight
                        comfort that lasts all day.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <h3 className="text-xl font-bold">
                          Customizable Design
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Choose from a variety of colors to match your style and
                        preferences.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <h3 className="text-xl font-bold">
                          Advanced Technology
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Innovative features that adapt to your environment and
                        vision needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src="/images/about.jpg"
                  width={550}
                  height={310}
                  alt="About FlexFocus"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="flex justify-center items-center w-svw py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Products
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the perfect eyewear with advanced features for your
                  lifestyle.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 max-w-5xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg border h-[400px]">
                <div className="aspect-auto overflow-hidden h-[200px]">
                  <Image
                    src="/images/1.webp"
                    width={400}
                    height={400}
                    alt="FlexFocus Classic"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">FlexFocus Classic</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Sun className="h-4 w-4" />
                      <span>Adjustable Brightness</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Blue Light Filtering</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border h-[400px]">
                <div className="overflow-hidden h-[200px]">
                  <Image
                    src="/images/2.webp"
                    width={400}
                    height={400}
                    alt="FlexFocus Pro"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">FlexFocus Pro</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Sun className="h-4 w-4" />
                      <span>Adjustable Brightness</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Blue Light Filtering</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>Adjustable Focal Length</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border h-[400px]">
                <div className="aspect-auto overflow-hidden h-[200px]">
                  <Image
                    src="/images/3.webp"
                    width={400}
                    height={400}
                    alt="FlexFocus Elite"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">FlexFocus Elite</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Sun className="h-4 w-4" />
                      <span>Adjustable Brightness</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Blue Light Filtering</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>Adjustable Focal Length</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="flex justify-center items-center w-svw py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover what makes FlexFocus the most advanced eyewear on the
                  market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3">
                  <Sun className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Adjustable Brightness</h3>
                <p className="text-center text-muted-foreground">
                  Automatically adapts to your environment&apos;s lighting
                  conditions for optimal visibility.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Blue Light Filtering</h3>
                <p className="text-center text-muted-foreground">
                  Protects your eyes from harmful blue light emitted by digital
                  screens.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Adjustable Focal Length</h3>
                <p className="text-center text-muted-foreground">
                  Seamlessly transition between near and far vision with our
                  advanced lens technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary-foreground"
                  >
                    <path d="M4 19h16" />
                    <path d="M4 15h16" />
                    <path d="M4 11h16" />
                    <path d="M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Changeable Colors</h3>
                <p className="text-center text-muted-foreground">
                  Customize your frames with a variety of color options to match
                  your style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary-foreground"
                  >
                    <path d="M12 22v-7" />
                    <path d="M5 9h14" />
                    <path d="M5 15h14" />
                    <path d="M19 9V2H5v7" />
                    <path d="M5 15v7h14v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Titanium Build</h3>
                <p className="text-center text-muted-foreground">
                  Lightweight yet durable titanium frames for maximum comfort
                  and longevity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-primary p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary-foreground"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Comfort Fit</h3>
                <p className="text-center text-muted-foreground">
                  Ergonomically designed for all-day comfort without pressure
                  points.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="reviews"
          className="flex justify-center items-center w-svw py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Customer Reviews
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers are saying about FlexFocus eyewear.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border p-6">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <h3 className="font-bold">Sarah T.</h3>
                    <div className="flex text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  The adjustable brightness feature is a game-changer. I no
                  longer have to switch between different pairs of glasses when
                  going from indoors to outdoors.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <h3 className="font-bold">Michael R.</h3>
                    <div className="flex text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  As someone who spends hours in front of a computer, the blue
                  light filtering has significantly reduced my eye strain and
                  improved my sleep quality.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <h3 className="font-bold">Jennifer L.</h3>
                    <div className="flex text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  The titanium build makes these glasses incredibly lightweight.
                  I sometimes forget I&apos;m wearing them!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center w-svw py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to experience FlexFocus?
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Join thousands of satisfied customers who have transformed
                  their vision experience with FlexFocus eyewear.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <form className="grid w-full gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <Button className="underline underline-offset-2">
                    Terms & Conditions
                  </Button>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center justify-between px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Eye className="h-6 w-6" />
          <span className="text-xl font-bold">FlexFocus</span>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} FlexFocus. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <p className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </p>
          <p className="text-xs hover:underline underline-offset-4">Privacy</p>
          <p className="text-xs hover:underline underline-offset-4">Contact</p>
        </nav>
      </footer>
    </div>
  );
}
